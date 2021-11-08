jQuery(document).ready(function() {
    jQuery('.portfolioItemBig').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 300
    });
    
    jQuery('.portfolioItemLeft').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 300
    });
    
    jQuery('.portfolioItemRight').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 300
    });
});