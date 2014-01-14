This plugin allows you to create a jQuery UI tabs container with the tabs on the left instead of the top.

Observe:

    <div id="my-tabs">
        <ul>
            <li><a href="#tab-1">Tab 1</a></li>
            <li><a href="#tab-2">Tab 2</a></li>
            <li><a href="#tab-3">Tab 3</a></li>
        </ul>
        <div id="tab-1">This is the first tab.</div>
        <div id="tab-2">This is the second tab.</div>
        <div id="tab-3">I like to eat steak.</div>
    </div>
    <script>
        $(function () {
            $('#my-tabs').vertabs();
        });
    </script>

Simple.

There are a couple of neat features.

---

### Options

#### active

Type: `Integer`  
Default: `0`

Which panel is currently open.

##### Examples:

    // initialize
    $('.selector').vertabs({ 'active': 1 });
    
    // getter
    var active = $('.selector').vertabs('option', 'active');
    
    // setter
    $('.selector').vertabs('option', 'active', 1);

---

#### event

Type: `String`  
Default: `'click'`

The type of event that the tabs should react to in order to activate the tab. To activate on hover, use `'mouseover'`.

##### Examples:

    // initialize
    $('.selector').vertabs({ 'event': 'mouseover' });
    
    // getter
    var event = $('.selector').vertabs('option', 'event');
    
    // setter
    $('.selector').vertabs('option', 'event', 'mouseover');

---

### Methods

#### add(label)

Returns: `jQuery`

Adds a tab.

* label  
Type: `String`  
The tab label.

##### Example:

    $('.selector').vertabs('add', 'Awesome Tab');

---

#### option(optionName)

Returns: `Object`

Gets the value currently associated with the specified `optionName`.

* optionName  
Type: `String`  
The name of the option to get.

##### Example:

    var active = $('.selector').vertabs('option', 'active');

---

#### option()

Returns: `Object`

Gets an object containing key/value pairs representing the current tabs options hash.

* This signature does not accept any arguments.

##### Example:

    var options = $('.selector').vertabs('option');

---

#### option(optionName, value)

Returns: `jQuery`

Sets the value of the tabs option associated with the specified `optionName`.

* optionName  
Type: `String`  
The name of the option to set.

* value  
Type: `Object`  
A value to set for the option.

##### Example:

    $('.selector').vertabs('option', 'active', 1);

---

#### option(options)

Returns: `jQuery`

Sets one or more options for the tabs.

* options  
Type: `Object`  
A map of option-value pairs to set.

##### Example:

    $('.selector').vertabs('option', { 'active': 1 });

---

#### remove(index)

Returns: `jQuery`

Removes a tab.

* index  
Type: `Integer`  
Which tab to remove.

##### Example:

    $('.selector').vertabs('remove', 1);

---

#### rename(index, label)

Returns: `jQuery`

Changes the tab label.

* index  
Type: `Integer`  
Which tab to rename.

* label  
Type: `String`  
The new tab label.

##### Example:

    $('.selector').vertabs('rename', 2, 'Steak Tab');

---

#### widget()

Returns: `jQuery`

Returns a `jQuery` object containing the tabs container.

* This method does not accept any arguments.

##### Example:

    var widget = $('.selector').vertabs('widget');

---

### Events

#### activate(event, ui)

Type: `vertabsactivate`

Triggered after a tab has been activated.

Note: Since the `activate` event is only fired on tab activation, it is not fired for the initial tab when the tabs widget is created. If you need a hook for widget creation use the `create` event.

* event  
Type: `Event`

* ui  
Type: `Object`

    - newPanel  
    Type: `jQuery`  
    The panel that was just activated.
    
    - newTab  
    Type: `jQuery`  
    The tab that was just activated.
    
    - oldPanel  
    Type: `jQuery`  
    The panel that was just deactivated.
    
    - oldTab  
    Type: `jQuery`  
    The tab that was just deactivated.

##### Examples:

    // initialize
    $('.selector').vertabs({
        'activate': function (event, ui) {}
    });
    
    // bind post-initialization
    $('.selector').on('vertabsactivate', function (event, ui) {});

---

#### add(event, ui)

Type: `vertabsadd`

Triggered after a tab has been added.

* event  
Type: `Event`

* ui  
Type: `Object`

    - newPanel  
    Type: `jQuery`  
    The panel that was just activated.
    
    - newTab  
    Type: `jQuery`  
    The tab that was just activated.

##### Examples:

    // initialize
    $('.selector').vertabs({
        'add': function (event, ui) {}
    });
    
    // bind post-initialization
    $('.selector').on('vertabsadd', function (event, ui) {});

---

#### create(event, ui)

Type: `vertabscreate`

Triggered when the tabs are created.

* event  
Type: `Event`

* ui  
Type: `Object`

    - panel  
    Type: `jQuery`  
    The active panel.
    
    - tab  
    Type: `jQuery`  
    The active tab.

##### Examples:

    // initialize
    $('.selector').vertabs({
        'create': function (event, ui) {}
    });
    
    // bind post-initialization
    $('.selector').on('vertabscreate', function (event, ui) {});

---

#### remove

Type: `vertabsremove`

Triggered after a tab has been removed.

* event  
Type: `Event`

* ui  
Type: `Object`

    - oldPanel  
    Type: `jQuery`  
    The panel that was just removed.
    
    - oldTab  
    Type: `jQuery`  
    The tab that was just removed.

##### Example:

    // initialize
    $('.selector').vertabs({
        'remove': function (event, ui) {}
    });
    
    // bind post-initialization
    $('.selector').on('vertabsremove', function (event, ui) {});

---

#### rename

Type: `vertabsremove`

Triggered after a tab has been renamed.

* event  
Type: `Event`

* ui  
Type: `Object`

    - tab  
    Type: `jQuery`  
    The tab that was just renamed.

##### Examples:

    // initialize
    $('.selector').vertabs({
        'rename': function (event, ui) {}
    });
    
    // bind post-initialization
    $('.selector').on('vertabsrename', function (event, ui) {});

---

### To-do

* It would be cool if tabs could be added to the right side as well as the left.
