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

#### addTab

Type: Function  
Default: null

A callback function to be executed after a new tab is added.

---

#### renameTab

Type: Function  
Default: null

A callback function to be executed after a tab is renamed.

---

### Methods

#### addTab(title)

Returns: null

Adds a new tab and panel with the title given. The ID of the new panel is the result of `makeID(title)`.

* title  
Type: String  
The title of the new tab.

##### Example:

    $('.selector').vertabs('addTab', 'Awesome Tab');

---

#### makeID(string)

Returns: String

Returns a string that can be used as the ID attribute of a DOM element, with spaces replaced by dashes and special characters removed.

* string  
Type: String  
A string.

##### Example:

    var validID = $('.selector').vertabs('makeID', 'Not a valid ID');

---

#### renameTab(title, newTitle)

Returns: null

Renames a tab, changes its ID and all that good stuff.

* title  
Type: String  
The title of the tab before it is renamed.

* newTitle  
Type: String  
The title of the tab after it is renamed.

##### Example:

    $('.selector').vertabs('renameTab', 'Awesome Tab', 'Awesomer Tab');

---

### To-do

* `addTab` and `removeTab` methods should return the element jQuery style.
* It would be cool if tabs could be added to the right side as well as the left.
