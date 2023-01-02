
# Assumptions

Getting the data all at once and paging will be calculated in the UI.
Only one breakpoint to be considered - 720px.
API call will be successful and data structure won't change.
In case of error an error GIF will be displayed with no title or button (Loading phase is temporary).

# Getting Started with GOT App

After reading all the instructions and requirements.
I decided that I need 3 components to build:
    1. Header
    2. Characters Cards - changes on screen size
    3. Footer - changes on screen size

All components above will be parallel to each other and stateless, so they should get what they need from their parent.
The API call will be from the head component and will be stored in the reducer store for paging purposes.

The store will save all the data and will provide the components the data according the page they ask.

Used hook to do the API call according to Best Practice.

cleaned public directory from unnecessary code and assets.

Used theme provider for better unity.

Added css reset to start from basic and control the css elements as pleased.

# Preformance

Header and Footer will render each time we load additional characters to view.
We can prevent it with using React.memo() to the header and useCallback to the getNextPage function to the Footer
However I don't believe the cost is worth it, Additional work for JS and React to do the "magic" behind the scenes is higher rather than to render 2 edge components with no children.

# Tests

I chose to add tests to the reducer as it controls the logic of the app and influences both Cards and Footer components.
