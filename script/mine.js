(() => {
    const $mineContainer = document.querySelector('.mine_main');
    const horizontalLines = 10;
    const verticalLines = 10;
    const numberOfTiles = horizontalLines * verticalLines;

    for(let i = 0; i < numberOfTiles; i++) {
        const $mineItem = document.createElement('div');
        $mineItem.classList.add('mine_item');
        $mineContainer.appendChild($mineItem);
    }
})();
