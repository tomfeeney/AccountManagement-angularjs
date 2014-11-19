
jQuery.fn.sortElements = (function(){
    
    var sort = [].sort;
    
    return function(comparator, getSortable) {
        
        getSortable = getSortable || function(){return this;};
        
        var placements = this.map(function(){
            
            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,
                
                // Since the element itself will change position, we have
                // to have some way of storing it's original position in
                // the DOM. The easiest way is to have a 'flag' node:
                nextSibling = parentNode.insertBefore(
                    document.createTextNode(''),
                    sortElement.nextSibling
                );
            
            return function() {
                
                if (parentNode === this) {
                    throw new Error(
                        "You can't sort elements if any one is a descendant of another."
                    );
                }
                
                // Insert before flag:
                parentNode.insertBefore(this, nextSibling);
                // Remove flag:
                parentNode.removeChild(nextSibling);
                
            };
            
        });
       
        return sort.call(this, comparator).each(function(i){
            placements[i].call(getSortable.call(this));
        });
        
    };
    
})();



/* TABLE SORTING */


$('.sorttable')
.each(function(){
    var th = $(this),
        thIndex = th.index(),
        inverse = false;

    th.click(function(){
      var parent =  $(th).closest('table');

     $(parent).find('td').filter(function(){

        return $(this).index() === thIndex;

      }).sortElements(function(a, b){

        if( $.text([a]) == $.text([b]) )
        return 0;

        return $.text([a]) > $.text([b]) ?
        inverse ? -1 : 1
        : inverse ? 1 : -1;

        }, function(){

        return this.parentNode; 

        });

        inverse = !inverse;

    });

});


/* END TABLE SORTING */


