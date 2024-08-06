const jsApp = function() {

    const uiBtnMenu = document.querySelector( '#uiBtnMenu' );
    
    let fn = {};

    fn.init = () => {
        
        uiBtnMenu.addEventListener( 'click', () => {
            fn.handleToggleBtnMenu();
        });
    };

    fn.handleToggleBtnMenu = () => {
        document.querySelectorAll( '.sidebar, .main-menu-tit, .toggle-menu--button, .sctn, ul > li > a > svg' ).forEach( ( uiObj ) => {
            uiObj.classList.toggle( 'active' );
        });
    };

    return fn;
}();

export default jsApp;