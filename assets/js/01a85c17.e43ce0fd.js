"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13],{6165:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(3366),n=a(7294),l=a(6010),s=a(261),i=a(6742),c="sidebar_q+wC",m="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",u="sidebarItem_cjdF",d="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs",b=a(4973);function p(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:o},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var f=a(571),v=["sidebar","toc","children"];var h=function(e){var t=e.sidebar,a=e.toc,i=e.children,c=(0,r.Z)(e,v),m=t&&t.items.length>0;return n.createElement(s.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m})},i),a&&n.createElement("div",{className:"col col--2"},n.createElement(f.Z,{toc:a})))))}},94:function(e,t,a){a.r(t);var r=a(7294),n=a(6742),l=a(6165),s=a(4973),i=a(3018);t.default=function(e){var t=e.tags,a=e.sidebar,c=(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),m={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);m[t]=m[t]||[],m[t].push(e)}));var o=Object.entries(m).sort((function(e,t){var a=e[0],r=t[0];return a.localeCompare(r)})).map((function(e){var a=e[0],l=e[1];return r.createElement("article",{key:a},r.createElement("h2",null,a),l.map((function(e){return r.createElement(n.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),r.createElement("hr",null))})).filter((function(e){return null!=e}));return r.createElement(l.Z,{title:c,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},r.createElement("h1",null,c),r.createElement("section",{className:"margin-vert--lg"},o))}}}]);