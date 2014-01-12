(function ($) {
    $.widget('ui.vertabs', {
        'options': {
            'addTab': null,
            'renameTab': null
        },
        '_create': function () {
            var self = this;
            
            this.element.addClass('ui-vertabs ui-widget');
            
            this.panels = this.element.children('div')
                .addClass('ui-vertabs-panel');
            
            this.tabContainer = this.element.children('ul')
                .addClass('ui-vertabs-nav');
            
            this.tabs = this.tabContainer.children('li')
                .addClass('ui-corner-left ui-state-default')
                .hover(function () {
                    $(this).addClass('ui-state-hover');
                }, function () {
                    $(this).removeClass('ui-state-hover');
                });
            
            this.links = this.tabs.children('a')
                .click(function (e) {
                    var panelID = $(this).attr('href').substr(1);
                    e.preventDefault();
                    self.activate(panelID);
                });
            
            this.activate();
        },
        'activate': function (panelID) {
            panelID = panelID || this.panels.first().attr('id');
            
            this.tabs.filter('.ui-state-active').removeClass('ui-state-active');
            this.panels.filter(':visible').hide();
            
            this.tabs.has('a[href=#' + panelID + ']').addClass('ui-state-active');
            $('#' + panelID).show();
        },
        'addTab': function (title) {
            var panelID = 'ui-vertabs-tab-' + this.randomInt(1000, 9999),
                self = this,
                newLink,
                newPanel,
                newTab;
            
            newLink = $('<a href="#' + panelID + '">' + title + '</a>')
                .click(function (e) {
                    var panelID = $(this).attr('href').substr(1);
                    e.preventDefault();
                    self.activate(panelID);
                });
            
            newTab = $('<li class="ui-corner-left ui-state-default"></li>')
                .append(newLink)
                .hover(function () {
                    $(this).addClass('ui-state-hover');
                }, function () {
                    $(this).removeClass('ui-state-hover');
                });
            
            newPanel = $('<div class="ui-vertabs-panel" id="' + panelID + '"></div>');
            
            this.links = this.links.add(newLink);
            this.tabs = this.tabs.add(newTab);
            this.panels = this.panels.add(newPanel);
            
            $('#new-category-tab').before(newTab);
            $('#new-category').before(newPanel);
            
            this.activate(panelID);
            
            if ($.isFunction(this.options.addTab)) {
                this.options.addTab(title, panelID);
            }
        },
        'randomInt': function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        'renameTab': function (panelID, title) {
            this.links.filter('[href=#' + panelID + ']')
                .text(title);
            
            if ($.isFunction(this.options.renameTab)) {
                this.options.renameTab(panelID, title);
            }
        }
    });
}(jQuery));