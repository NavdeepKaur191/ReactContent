# ComponentName

State:
- activeLink: 0

Props:
- navLinks: object

Render:
- Accepts an array of objects, each representing a link in the nav menu. Each object contains:
    - url name (Home, About, Contact Us, etc)
    - url
- Render the list of links

Event Handlers:
- handleClick: When a nav menu item is clicked, update activeLink with nav menu item index