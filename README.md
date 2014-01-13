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

#### activate

Type: Function  
Default: null

A callback function to be executed after a tab is activated.

#### Example

    $('.selector').vertabs({
        'activate': function (panelID) {}
    });

---

#### addTab

Type: Function  
Default: null

A callback function to be executed after a new tab is added.

#### Example

    $('.selector').vertabs({
        'addTab': function (title, panelID) {}
    });

---

#### renameTab

Type: Function  
Default: null

A callback function to be executed after a tab is renamed.

#### Example

    $('.selector').vertabs({
        'renameTab': function (panelID, title) {}
    });

---

### Methods

#### activate(panelID)

Returns: jQuery (plugin only)

Activates the tab and panel with the ID given.

* panelID  
Type: String  
The ID of the tab to activate (without hash mark).

##### Example:

    $('.selector').vertabs('activate', 'tab-3');

---

#### addTab(title)

Returns: jQuery (plugin only)

Adds a new tab and panel with the title given. The ID of the new panel is the string `ui-vertabs-tab-` plus a random integer.

* title  
Type: String  
The title of the new tab.

##### Example:

    $('.selector').vertabs('addTab', 'Awesome Tab');

---

#### randomInt(min, max)

Returns: Number

Generates a random number within the range given. This function is used when adding a new tab and panel to create the ID.

* min  
Type: Number  
The minimum number to return.

* max  
Type: Number  
The maximum number to return.

##### Example:

    var random = $('.selector').vertabs('randomInt', 1, 100);

---

#### renameTab(panelID, title)

Returns: jQuery (plugin only)

Changes the title on the tab with the ID given.

* panelID  
Type: String  
The ID of the tab to rename (without hash mark).

* title  
Type: String  
The new title of the tab.

##### Example:

    $('.selector').vertabs('renameTab', 'Awesome Tab', 'Awesomer Tab');

---

### To-do

* It would be cool if tabs could be added to the right side as well as the left.
