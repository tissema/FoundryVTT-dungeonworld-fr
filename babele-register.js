Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'dungeonworld-fr',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});
