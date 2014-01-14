(function ($) {
    $.widget('ui.vertabs', {
        'options': {
            'active': 0,
            'event': 'click',
            
            // callbacks
            'activate': null,
            'add': null,
            'remove': null,
            'rename': null
        },
        '_create': function () {
            var self = this;
            
            this.element.addClass('ui-vertabs ui-widget');
            
            this._processTabs();
            
            this._setupEvents(this.options.event);
        },
        '_activate': function (index) {
            var newPanel, newTab, oldPanel, oldTab;
            
            if (index === null) {
                return;
            }
            
            newPanel = this.panels.eq(index);
            newTab = this.tabs.eq(index);
            
            if (!newTab.length || !newPanel.length) {
                return;
            }
            
            newPanel.show();
            newTab.addClass('ui-state-active');
            
            oldPanel = this._getActivePanel().hide();
            oldTab = this._getActiveTab().removeClass('ui-state-active');
            
            this.options.active = index;
            
            this._trigger('activate', null, {
                'newPanel': newPanel,
                'newTab': newTab,
                'oldPanel': oldPanel,
                'oldTab': oldTab
            });
        },
        '_eventHandler': function (event) {
            var anchor = $(event.currentTarget),
                tab = anchor.closest('li');
            
            this._activate(tab.index());
        },
        '_getActivePanel': function () {
            return this.panels.eq(this.options.active);
        },
        '_getActiveTab': function () {
            return this.tabs.eq(this.options.active);
        },
        '_getCreateEventData': function () {
            return {
                'panel': this._getActivePanel(),
                'tab': this._getActiveTab()
            };
        },
        '_processTabs': function () {
            this.panels = this.element.children('div').addClass('ui-vertabs-panel');
            
            this.tabContainer = this.element.children('ul').addClass('ui-vertabs-nav');
            
            this.tabs = this.tabContainer.children('li').addClass('ui-corner-left ui-state-default');
            
            this.anchors = this.tabs.children('a');
            
            this.panels.not(this._getActivePanel()).hide();
            this._getActiveTab().addClass('ui-state-active');
        },
        '_setOption': function (key, value) {
            if (key === 'active') {
                // _activate() will handle invalid values and update this.options
                this._activate(value);
                return;
            }
            
            this._super(key, value);
            
            if (key === 'event') {
                this._setupEvents(value);
            }
        },
        '_setupEvents': function (event) {
            var events = {
                'click': function (event) {
                    event.preventDefault();
                }
            };
            
            if (event) {
                $.each(event.split(' '), function (index, eventName) {
                    events[eventName] = '_eventHandler';
                });
            }
            
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(this.anchors, events);
            
            this._focusable(this.tabs);
            this._hoverable(this.tabs);
        },
        'add': function (label) {
            var newPanel = $('<div class="ui-vertabs-panel"></div>').hide().uniqueId(),
                newTab = $('<li class="ui-corner-left ui-state-default"></li>'),
                newAnchor = $('<a></a>').attr('href', '#' + newPanel.attr('id')).text(label);
            
            this.element.append(newPanel);
            this.tabContainer.append(newTab.append(newAnchor));
            
            this.panels = this.panels.add(newPanel);
            this.tabs = this.tabs.add(newTab);
            this.anchors = this.anchors.add(newAnchor);
            
            this._setupEvents(this.options.event);
            
            this._trigger('add', null, {
                'newPanel': newPanel,
                'newTab': newTab
            });
        },
        'remove': function (index) {
            var oldPanel = this.panels.eq(index).remove(),
                oldTab = this.tabs.eq(index).remove();
            
            this.panels = this.panels.not(oldPanel);
            this.tabs = this.tabs.not(oldTab);
            
            this._trigger('remove', null, {
                'oldPanel': oldPanel,
                'oldTab': oldTab
            });
        },
        'rename': function (index, label) {
            var tab = this.tabs.eq(index).children('a').text(label);
            
            this._trigger('rename', null, {
                'tab': tab
            });
        }
    });
}(jQuery));