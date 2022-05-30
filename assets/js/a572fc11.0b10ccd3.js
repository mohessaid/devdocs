"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[52716],{70631:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return n},metadata:function(){return u},toc:function(){return p}});var o=r(83117),a=r(80102),s=(r(67294),r(3905)),i=r(13904),l=["components"],n={title:"Moodle 2.4.4",tags:["Release notes","Moodle 2.4"],sidebar_position:4,moodleVersion:"2.4.4"},d=void 0,u={unversionedId:"releases/2.4/2.4.4",id:"releases/2.4/2.4.4",title:"Moodle 2.4.4",description:"Release date: 14 May 2013",source:"@site/general/releases/2.4/2.4.4.md",sourceDirName:"releases/2.4",slug:"/releases/2.4/2.4.4",permalink:"/devdocs/general/releases/2.4/2.4.4",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.4/2.4.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.4",permalink:"/devdocs/general/tags/moodle-2-4"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1653908984,formattedLastUpdatedAt:"30/05/2022",sidebarPosition:4,frontMatter:{title:"Moodle 2.4.4",tags:["Release notes","Moodle 2.4"],sidebar_position:4,moodleVersion:"2.4.4"},sidebar:"releaseNotes",previous:{title:"Moodle 2.4.3",permalink:"/devdocs/general/releases/2.4/2.4.3"},next:{title:"Moodle 2.4.5",permalink:"/devdocs/general/releases/2.4/2.4.5"}},m={},p=[{value:"Highlights",id:"highlights",level:2},{value:"API changes",id:"api-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Known Bugs",id:"known-bugs",level:2},{value:"Translations",id:"translations",level:2}],h={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,o.Z)({frontMatter:n},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 14 May 2013"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.4.4%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.4.4"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38702"},"MDL-38702")," - CSS Optimizer now works with MyMobile theme"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39203"},"MDL-39203")," - Connection to Dropbox repositories is now working")),(0,s.kt)("h2",{id:"api-changes"},"API changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38035"},"MDL-38035")," - Custom profile field names in conditional activities support multilang strings")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=228930"},"MSA-13-0020")," Capability issue in Assignment"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=228931"},"MSA-13-0021")," Potential information leak in Gradebook"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=228933"},"MSA-13-0022")," Information leak in hub registration"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=228934"},"MSA-13-0023")," Permission issue in blog comments"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=228935"},"MSA-13-0024")," Form filtering issue")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38387"},"MDL-38387")," - Caching of the site identifier is now more robust"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38541"},"MDL-38541")," - Rebuilding the course cache no longer causes problems during upgrade"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39296"},"MDL-39296")," - A valid key is used for score tracks in SCORM graphs report"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38565"},"MDL-38565")," - MODE_SESSION Cache stores include the userid in keys"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39398"},"MDL-39398")," - Notice while sending Jabber notifications fixed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39365"},"MDL-39365")," - SCORM questions are counted correctly"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35364"},"MDL-35364")," - Shortened text no longer causes invalid HTML")),(0,s.kt)("h2",{id:"known-bugs"},"Known Bugs"),(0,s.kt)("p",null,"These issues were discovered at the last minute before there was time to fix it in this release.  They will be fixed in the next weekly release."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39641"},"MDL-39641"),' - "Updating a repository instance configuration requires a change of instance name"   - The work-around is simply to change the name slightly.')),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.4.4"},"Notas de Moodle 2.4.4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.4.4"},"Notes de mise \xe0 jour de Moodle 2.4.4"))))}c.isMDXComponent=!0}}]);