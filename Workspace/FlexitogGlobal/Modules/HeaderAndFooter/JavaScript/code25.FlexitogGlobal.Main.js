
define(
	'code25.FlexitogGlobal.Main'
,   [
		'code25.FlexitogGlobal.Header.View','Header.Profile.View','Footer.View','Header.MiniCart.View','code25_flexitogglobal_header_profile.tpl','code25_flexitogglobal_footer.tpl','code25_flexitogglobal_mini_cart.tpl','code25.BannerCCT.View','Home.View'
	]
,   function (
		HeaderView,HeaderProfileView,FooterView,HeaderMiniCartView,code25_flexitogglobal_header_profile_tpl,code25_flexitogglobal_footer_tpl,code25_flexitogglobal_mini_cart_tpl,code25BannerCCTView,HomeView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			var CMS=container.getComponent('CMS');
			CMS.registerCustomContentType({
				
				// this property value MUST be lowercase
				id: 'c25_banner'
				
				// The view to render the CCT
			,	view: code25BannerCCTView
			});

			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');

			HeaderProfileView.prototype.template=code25_flexitogglobal_header_profile_tpl;
			FooterView.prototype.template=code25_flexitogglobal_footer_tpl;
			HeaderMiniCartView.prototype.template=code25_flexitogglobal_mini_cart_tpl;
			HomeView.prototype.title=_('FlexiTog | Thermal clothing for Cold stores, Freezers and Winter wear').translate();
			
			if(layout)
			{	
				layout.registerView('Header', function() { 		
					return new HeaderView({ application: container });
				});
			}

		}
	};
});
