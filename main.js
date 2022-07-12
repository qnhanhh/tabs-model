const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');
const line = $('.tabs .line');

const tabActive = $('.tab-item.active')

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function () {
        $('.tab-pane.active').classList.remove('active');
        pane.classList.add('active');
        $('.tab-item.active').classList.remove('active');
        this.classList.add('active');

        line.style.left = tab.offsetLeft + 'px';
        line.style.width = tab.offsetWidth + 'px';
    }
})