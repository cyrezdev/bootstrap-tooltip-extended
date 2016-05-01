/* ===========================================================================
 * bootstrap-tooltip-extended.js v1.0.0
 * https://github.com/cyrilreze/bootstrap-tooltip-extended
 * ===========================================================================
 * Copyright 2016 Cyril Rezé
 * Licensed under MIT
 * https://github.com/cyrilreze/bootstrap-tooltip-extended/blob/master/LICENSE
 * =========================================================================== */

!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP-EXTENDED PUBLIC CLASS DEFINITION
  * ======================================== */

  // Save the original function object
  var _old = $.fn.tooltip;

  // Create a new constructor
  var TooltipExtended = function (element, options) {
    this.init('tooltip', element, options)
  }

  TooltipExtended.prototype = $.extend({}, _old.Constructor.prototype, {

    constructor: TooltipExtended

  , show: function () {
      var $tip
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp
        , e = $.Event('show')

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        pos = this.getPosition()

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
          // Additional positions
          case 'bottom-left':
            tp = {top: pos.top + pos.height, left: pos.left};
            break;
          case 'bottom-right':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width - actualWidth};
            break;
          case 'top-left':
            tp = {top: pos.top - actualHeight, left: pos.left };
            break;
          case 'top-right':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width - actualWidth};
            break;
        }

        this.applyPlacement(tp, placement)
        this.$element.trigger('shown')
      }
    }
  });


 /* TOOLTIP-EXTENDED PLUGIN DEFINITION
  * ================================== */

  var old = $.fn.tooltip

  // Override the old initialization with the new constructor
  $.fn.tooltip = $.extend(function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = $.extend({}, TooltipExtended.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('tooltip', (data = new TooltipExtended(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }, $.fn.tooltip )


 /* TOOLTIP-EXTENDED NO CONFLICT
  * ============================ */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old;
    return this;
  };

}(window.jQuery);
