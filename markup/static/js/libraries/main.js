'use strict'

$(document).ready(function() {
    (() => {
    const headerNavigationList = $('header ul');
    const heightSearchBtn = headerNavigationList.find('li:first-of-type a').css("height");
    $('#open-search').css({
        height: heightSearchBtn,
        width: heightSearchBtn
    });
    })();

    //Search input
    (() => {
        const searchForm = $('.search-form');
        const inputSearch = searchForm.find('input');
        const searchBtn = $('#open-search');

        searchForm.submit((e) => {
            e.preventDefault();
            console.log('submit');
            inputSearch.val('');
        });
        searchBtn.click(() => {
            searchForm.removeClass('hide');
            inputSearch.focus();
        });
        inputSearch.focus(() => {
            searchBtn.addClass('search_active');
        });
        inputSearch.blur(() => {
            searchForm.addClass('hide');
            searchBtn.removeClass('search_active');
        });
    })();
    //<<SEARCH END 

    // Carousel

    $('.carousel').carousel({
        interval: null
    });

    //<<< CAROUSEL END

    // some-item
    (() => {
        const arrSomeItems = $('.some-item');
        const arrItemsBtn = arrSomeItems.find('a'); {
            const getItemView = (objEvt) => $(objEvt).parent('.some-item').find('.item-view')
            arrItemsBtn.mousedown(function() {
                const thisItemView = getItemView(this);
                const data = thisItemView.data('type');
                thisItemView.removeClass(data).addClass(`${data}-active`);
            });
            arrItemsBtn.mouseup(function() {
                const thisItemView = getItemView(this);
                const data = thisItemView.data('type');
                thisItemView.removeClass(`${data}-active`).addClass(data);
            });
        }
    })();

    // <<< SOME ITEM

    // accordion
        $('.collapse').collapse();


        
    // ACCORDION END
    //<<<doc ready
});