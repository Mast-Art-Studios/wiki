"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89],{6165:function(e,a,t){t.d(a,{Z:function(){return h}});var r=t(3366),l=t(7294),n=t(6010),i=t(261),s=t(6742),m="sidebar_q+wC",c="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",d="sidebarItem_cjdF",g="sidebarItemLink_zyXk",u="sidebarItemLinkActive_wcJs",p=t(4973);function v(e){var a=e.sidebar;return 0===a.items.length?null:l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},a.title),l.createElement("ul",{className:o},a.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))}))))}var E=t(571),b=["sidebar","toc","children"];var h=function(e){var a=e.sidebar,t=e.toc,s=e.children,m=(0,r.Z)(e,b),c=a&&a.items.length>0;return l.createElement(i.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},c&&l.createElement("aside",{className:"col col--3"},l.createElement(v,{sidebar:a})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":c,"col--9 col--offset-1":!c})},s),t&&l.createElement("div",{className:"col col--2"},l.createElement(E.Z,{toc:t})))))}},4428:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var r=t(7294),l=t(2263),n=t(6165),i=t(3146),s=t(6742),m=t(4973);var c=function(e){var a=e.metadata,t=a.previousPage,l=a.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(s.Z,{className:"pagination-nav__link",to:t},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(s.Z,{className:"pagination-nav__link",to:l},r.createElement("div",{className:"pagination-nav__label"},r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},o=t(3018);var d=function(e){var a=e.metadata,t=e.items,s=e.sidebar,m=(0,l.Z)().siteConfig.title,d=a.blogDescription,g=a.blogTitle,u="/"===a.permalink?m:g;return r.createElement(n.Z,{title:u,description:d,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},t.map((function(e){var a=e.content;return r.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.createElement(a,null))})),r.createElement(c,{metadata:a}))}},3146:function(e,a,t){t.d(a,{Z:function(){return v}});var r=t(7294),l=t(6010),n=t(3905),i=t(4973),s=t(6742),m=t(3018),c=t(6845),o=t(1217),d=t(6146),g="blogPostTitle_d4p0",u="blogPostData_-Im+",p="blogPostDetailsFull_xD8n";var v=function(e){var a,t,v,E=(t=(0,m.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),b=e.children,h=e.frontMatter,_=e.metadata,f=e.truncated,N=e.isBlogPostPage,Z=void 0!==N&&N,k=_.date,w=_.formattedDate,T=_.permalink,I=_.tags,L=_.readingTime,P=_.title,y=_.editUrl,M=h.author,x=h.image,C=h.keywords,A=h.author_url||h.authorURL,F=h.author_title||h.authorTitle,R=h.author_image_url||h.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(o.Z,{keywords:C,image:x}),r.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(v=Z?"h1":"h2",r.createElement("header",null,r.createElement(v,{className:g},Z?P:r.createElement(s.Z,{to:T},P)),r.createElement("div",{className:(0,l.Z)(u,"margin-vert--md")},r.createElement("time",{dateTime:k},w),L&&r.createElement(r.Fragment,null," \xb7 ",E(L))),r.createElement("div",{className:"avatar margin-vert--md"},R&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:A},r.createElement("img",{src:R,alt:M})),r.createElement("div",{className:"avatar__intro"},M&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:A},M)),r.createElement("small",{className:"avatar__subtitle"},F)))))),r.createElement("div",{className:"markdown"},r.createElement(n.Zo,{components:c.Z},b)),(I.length>0||f)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[p]=Z,a))},I.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),I.map((function(e){var a=e.label,t=e.permalink;return r.createElement(s.Z,{key:t,className:"margin-horiz--sm",to:t},a)}))),Z&&y&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.Z,{editUrl:y})),!Z&&f&&r.createElement("div",{className:"col text--right"},r.createElement(s.Z,{to:_.permalink,"aria-label":"Read more about "+P},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},6146:function(e,a,t){t.d(a,{Z:function(){return d}});var r=t(7294),l=t(4973),n=t(7462),i=t(3366),s=t(6010),m="iconEdit_mS5F",c=["className"],o=function(e){var a=e.className,t=(0,i.Z)(e,c);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,a),"aria-hidden":"true"},t),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var a=e.editUrl;return r.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},r.createElement(o,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);