define("discourse/plugins/discourse-details/initializers/apply-details",["exports","jquery","discourse/lib/plugin-api","discourse-i18n"],(function(e,i,t,s){"use strict"
function l(e){e.decorateCooked((e=>(0,i.default)("details",e)),{id:"discourse-details"}),e.addComposerToolbarPopupMenuOption({action:function(e){e.applySurround(`\n[details="${s.default.t("composer.details_title")}"]\n`,"\n[/details]\n","details_text",{multiline:!1})},icon:"caret-right",label:"details.title"})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"apply-details",initialize(){(0,t.withPluginApi)("1.14.0",l)}}})),define("discourse/plugins/discourse-details/lib/discourse-markdown/details",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.setup=function(e){e.allowList(["summary","summary[title]","details","details[open]","details.elided"]),e.registerPlugin((e=>{e.block.bbcode.ruler.push("details",i)}))}
const i={tag:"details",before(e,i){const t=i.attrs
e.push("bbcode_open","details",1),e.push("bbcode_open","summary",1),e.push("text","",0).content=t._default||"",e.push("bbcode_close","summary",-1)},after(e){e.push("bbcode_close","details",-1)}}}))

//# sourceMappingURL=discourse-details-dc285aa1ef01d7a4bb93ca99bdc9cdc0ff4c05ce78dd0fa7e7198da0b066ede5.map
//!

;
