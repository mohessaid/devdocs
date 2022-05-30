"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[28524],{22119:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),l=(r(67294),r(3905)),n=r(13904),i=["components"],s={title:"Moodle 3.10",tags:["Release notes","Moodle 3.10"],sidebar_position:-310,moodleVersion:"3.10"},p=void 0,m={unversionedId:"releases/3.10",id:"releases/3.10",title:"Moodle 3.10",description:"Release date: 9 November 2020",source:"@site/general/releases/3.10.md",sourceDirName:"releases",slug:"/releases/3.10",permalink:"/devdocs/general/releases/3.10",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.10.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.10",permalink:"/devdocs/general/tags/moodle-3-10"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1653908984,formattedLastUpdatedAt:"30/05/2022",sidebarPosition:-310,frontMatter:{title:"Moodle 3.10",tags:["Release notes","Moodle 3.10"],sidebar_position:-310,moodleVersion:"3.10"},sidebar:"releaseNotes",previous:{title:"Moodle 3.9.15",permalink:"/devdocs/general/releases/3.9/3.9.15"},next:{title:"Moodle 3.10.1",permalink:"/devdocs/general/releases/3.10/3.10.1"}},d={},u=[{value:"Server requirements",id:"server-requirements",level:2},{value:"Database requirements",id:"database-requirements",level:3},{value:"Client requirements",id:"client-requirements",level:2},{value:"Browser support",id:"browser-support",level:3},{value:"Warning",id:"warning",level:2},{value:"Major features",id:"major-features",level:2},{value:"Download course content",id:"download-course-content",level:3},{value:"Payment subsystem",id:"payment-subsystem",level:3},{value:"H5P updates and improvements",id:"h5p-updates-and-improvements",level:3},{value:"Content bank",id:"content-bank",level:3},{value:"Quiz and questions",id:"quiz-and-questions",level:3},{value:"Accessibility improvements",id:"accessibility-improvements",level:3},{value:"External tool (IMS-LTI)",id:"external-tool-ims-lti",level:3},{value:"Usability improvements",id:"usability-improvements",level:3},{value:"Other highlights",id:"other-highlights",level:2},{value:"Functional changes",id:"functional-changes",level:3},{value:"For administrators",id:"for-administrators",level:3},{value:"Mobile",id:"mobile",level:3},{value:"Performance",id:"performance",level:3},{value:"Security improvements",id:"security-improvements",level:2},{value:"For developers",id:"for-developers",level:2},{value:"Web service additions and updates",id:"web-service-additions-and-updates",level:3},{value:"Deprecations",id:"deprecations",level:3},{value:"Component API updates",id:"component-api-updates",level:3},{value:"Translations",id:"translations",level:2}],k={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Z,(0,a.Z)({frontMatter:s},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 9 November 2020"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.10%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.10"),"."),(0,l.kt)("p",null,"See our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/310/en/New_features"},"New features page")," in the user documentation for an introduction to Moodle 3.10 with screenshots."),(0,l.kt)("p",null,"If you are upgrading from a previous version, please see ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Upgrading"},"Upgrading")," in the user docs."),(0,l.kt)("h2",{id:"server-requirements"},"Server requirements"),(0,l.kt)("p",null,"These are just the minimum supported versions. We recommend keeping all of your software and operating systems up-to-date."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Moodle upgrade:  Moodle 3.5 or later"),(0,l.kt)("li",{parentName:"ul"},"PHP version: minimum PHP 7.2.0 ",(0,l.kt)("em",{parentName:"li"},"Note: minimum PHP version has increased since Moodle 3.8"),". PHP 7.3.x and 7.4.x are supported too. See ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_and_PHP"},"Moodle and PHP")," for details."),(0,l.kt)("li",{parentName:"ul"},"PHP extension ",(0,l.kt)("strong",{parentName:"li"},"mbstring")," is required (it was previously only recommended)")),(0,l.kt)("h3",{id:"database-requirements"},"Database requirements"),(0,l.kt)("p",null,"Moodle supports the following database servers. Again, version numbers are just the minimum supported version. We recommend running the latest stable version of any software."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Database"),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.postgresql.org/"},"PostgreSQL")),(0,l.kt)("td",{parentName:"tr",align:null},"9.6  (increased since Moodle 3.9)"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.mysql.com/"},"MySQL")),(0,l.kt)("td",{parentName:"tr",align:null},"5.7 (increased since Moodle 3.9)"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mariadb.org/"},"MariaDB")),(0,l.kt)("td",{parentName:"tr",align:null},"10.2.29 (increased since Moodle 3.8)"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.microsoft.com/en-us/server-cloud/products/sql-server/"},"Microsoft SQL Server")),(0,l.kt)("td",{parentName:"tr",align:null},"2012"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.oracle.com/us/products/database/overview/index.html"},"Oracle Database")),(0,l.kt)("td",{parentName:"tr",align:null},"11.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")))),(0,l.kt)("h2",{id:"client-requirements"},"Client requirements"),(0,l.kt)("h3",{id:"browser-support"},"Browser support"),(0,l.kt)("p",null,"Moodle is compatible with any standards compliant web browser. We regularly test Moodle with the following browsers:"),(0,l.kt)("p",null,"Desktop:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chrome"),(0,l.kt)("li",{parentName:"ul"},"Firefox"),(0,l.kt)("li",{parentName:"ul"},"Safari"),(0,l.kt)("li",{parentName:"ul"},"Edge")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note: Moodle 3.10 does NOT support Internet Explorer 11.")),(0,l.kt)("p",null,"Safari 7 and below has known compatibility issues with Moodle 3.10."),(0,l.kt)("p",null,"Mobile:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MobileSafari"),(0,l.kt)("li",{parentName:"ul"},"Google Chrome")),(0,l.kt)("p",null,"For the best experience and optimum security, we recommend that you keep your browser up to date. ",(0,l.kt)("a",{parentName:"p",href:"https://www.whatsmybrowser.org/"},"https://www.whatsmybrowser.org/")),(0,l.kt)("h2",{id:"warning"},"Warning"),(0,l.kt)("p",null,"If you have a large database, the upgrade step added in ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-69687"},"MDL-69687")," may be very, very slow. To avoid excessive down-time when you grade, you may want to test for this. A fix is being developed in ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-70285"},"MDL-70285"),"."),(0,l.kt)("h2",{id:"major-features"},"Major features"),(0,l.kt)("h3",{id:"download-course-content"},"Download course content"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69548"},"MDL-69548")," - Add ZipStream library to core"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69549"},"MDL-69549")," - Create course content export API"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69559"},"MDL-69559")," - Course content download - add site admin and course level settings, implement in course user interface")),(0,l.kt)("h3",{id:"payment-subsystem"},"Payment subsystem"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69166"},"MDL-69166")," - Add payment as subsystem supporting payment gateways")),(0,l.kt)("h3",{id:"h5p-updates-and-improvements"},"H5P updates and improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69087"},"MDL-69087")," - Add the option to personalize H5P styles"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69207"},"MDL-69207")," - Add library file caching to h5p"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69174"},"MDL-69174")," - Method of saving embedded H5P content grades in the gradebook"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69520"},"MDL-69520")," - Add Example and Tutorial links to the H5P editor"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68909"},"MDL-68909")," - Clean up temporary H5P editor files")),(0,l.kt)("h3",{id:"content-bank"},"Content bank"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69269"},"MDL-69269")," - Download content from the content bank"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69270"},"MDL-69270")," - Replace content file from content bank"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68688"},"MDL-68688")," - Add a notification when the content bank is empty"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68975"},"MDL-68975"),' - Add the author to the content bank "file details" view')),(0,l.kt)("h3",{id:"quiz-and-questions"},"Quiz and questions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45002"},"MDL-45002")," - New quiz completion option: At least one (or N) attempt completed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66587"},"MDL-66587")," - Scrolling quiz timer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68562"},"MDL-68562")," - Qtype_essay: Adding file-size limit to the attachment files")),(0,l.kt)("h3",{id:"accessibility-improvements"},"Accessibility improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68390"},"MDL-68390")," - WCAG 4.1.2: aria-hidden elements contain focusable elements"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67687"},"MDL-67687")," - Add Behat step to verify WCAG A and WCAG AA compliance")),(0,l.kt)("h3",{id:"external-tool-ims-lti"},"External tool (IMS-LTI)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67473"},"MDL-67473")," - LTI Advantage: Content Item flow to support creating multiple links"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67301"},"MDL-67301")," - Implement LTI 1.3 Dynamic Registration"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66934"},"MDL-66934")," - LTI: support substitution parameter for course history")),(0,l.kt)("h3",{id:"usability-improvements"},"Usability improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28501"},"MDL-28501")," - For folder resource, allow files to be opened in the browser rather than being downloaded"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65959"},"MDL-65959")," - Let users define their preferred backpack"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56041"},"MDL-56041")," - Cleanup custom 404 page and more easily support custom 50x error pages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69192"},"MDL-69192"),' - Assignment grading page: "Changes saved" should not be modal dialog'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33981"},"MDL-33981")," - Add ability to copy to Equella repository"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60621"},"MDL-60621")," - Improvement of modal UI when modal exceeds the height of the browser"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53966"},"MDL-53966")," - Lesson: Allow maximum number of attempts to be unlimited"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69613"},"MDL-69613")," - Grade report single view - confirm message if Override None is selected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69454"},"MDL-69454")," - Use a consistent search input field across all Moodle searches"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67278"},"MDL-67278")," - Use autocomplete widget for course category selector"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68107"},"MDL-68107")," - Boost: Make images in topic descriptions scale with the browser window"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68702"},"MDL-68702")," - Option to not include legacy course files in backup and restore process"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69630"},"MDL-69630")," - Social activity course format should allow for using the activity chooser"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63387"},"MDL-63387")," - Show original role name of renamed roles when enrolling users")),(0,l.kt)("h2",{id:"other-highlights"},"Other highlights"),(0,l.kt)("h3",{id:"functional-changes"},"Functional changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59510"},"MDL-59510")," - Keep OAuth 2 connections alive across users' sessions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66716"},"MDL-66716")," - Timeline block shows incorrect date of due items"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48391"},"MDL-48391")," - tool_uploadcourse should check if enrolment method can be disabled/deleted"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69739"},"MDL-69739")," - User tours: Add tour-level CSS selector"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69464"},"MDL-69464")," - Option to allow HTML in the page headings (skip applying format_string)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67419"},"MDL-67419")," - Set language in user profile during account auto-creation based on browser language instead of admin setting"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37745"},"MDL-37745")," - Control the display of available spaces in limited choices")),(0,l.kt)("h3",{id:"for-administrators"},"For administrators"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67211"},"MDL-67211")," - Tasks: Show information about running tasks, allow tasks to be disabled"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45849"},"MDL-45849")," - New capability to self enrol in course"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65451"},"MDL-65451")," - User upload via CLI"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69307"},"MDL-69307")," - Add CLI script to restore a course from backup file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69583"},"MDL-69583")," - Add import to tool_customlang"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69582"},"MDL-69582")," - Add export to tool_customlang"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69260"},"MDL-69260")," - Add option to show only contributed plugins in uninstall script"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69513"},"MDL-69513")," - Add ability to add dkim signatures using phpmailer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69265"},"MDL-69265")," - Have a way to append fixed arbitrary headers to all emails"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69600"},"MDL-69600")," - Expose divertallemailsto and divertallemailsexcept in the admin settings GUI"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69718"},"MDL-69718")," - Add support for terabytes and petabytes in the display_size function")),(0,l.kt)("h3",{id:"mobile"},"Mobile"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65976"},"MDL-65976")," - Add a new message provider for course completed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68406"},"MDL-68406"),' - Add option for "sign-out" only for the Moodle app'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68797"},"MDL-68797")," - Config setting for mobile file type exclusion list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67841"},"MDL-67841")," - Update mobile app connected message so it is not misleading when the user has not used the app for a time"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69810"},"MDL-69810")," - WebService: Users should be able to contact the site's support via the Moodle App")),(0,l.kt)("h3",{id:"performance"},"Performance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69760"},"MDL-69760")," - Performance improvement on Moodle Event table"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60583"},"MDL-60583")," - external_tokens table will benefit from index on token field"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68665"},"MDL-68665")," - Improve cacheability of assignfeedback_editpdf/stamps"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64818"},"MDL-64818")," - Improve efficiency of blocks_for_region()"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69746"},"MDL-69746")," - tool_replace: additional skip tables"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68729"},"MDL-68729")," - Search: Allow query on one Solr server and indexing on another"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68726"},"MDL-68726")," - Search: Stop Solr 'optimize' behaviour"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68690"},"MDL-68690")," - Search: Allow Solr to add documents in batches")),(0,l.kt)("h2",{id:"security-improvements"},"Security improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66222"},"MDL-66222")," - Add admin options for how to handle detected viruses"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68820"},"MDL-68820")," - Add a Referrer-Policy header setting to the security admin settings")),(0,l.kt)("h2",{id:"for-developers"},"For developers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58931"},"MDL-58931")," - AWS Aurora MySQL support for Moodle"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41492"},"MDL-41492")," - Allow alternate MUC cache config class (eg allow setup in pure $CFG / config.php)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38350"},"MDL-38350")," - PHP Warning when purging all caches: race condition?"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68874"},"MDL-68874")," - New optional SQL debug mode which instruments SQL with the calling PHP code"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69117"},"MDL-69117")," - Improve theme designer mode - part 2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67673"},"MDL-67673")," - Upgrade phpunit to 8.5.x"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68564"},"MDL-68564")," - Update before_footer hook to allow for output to be added to the page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69050"},"MDL-69050")," - Rename terms to use inclusive language"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65743"},"MDL-65743")," - Upgrade XMPPHP to latest version"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69418"},"MDL-69418")," - Allow plugins to attach data to grade items during backup and restore"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68928"},"MDL-68928")," - Add a way to decide what plugin will show in the activity chooser footer")),(0,l.kt)("h3",{id:"web-service-additions-and-updates"},"Web service additions and updates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67306"},"MDL-67306")," - Create API for grade category (gradebook)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55971"},"MDL-55971")," - Dataformat - Store to filearea support"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69486"},"MDL-69486")," - Add user idnumber and gradeitem idnumber to gradereport_user_get_grade_items webservice"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63805"},"MDL-63805")," - New Web Service mod_glossary_update_entry"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69776"},"MDL-69776")," - New Web Service core_files_delete_draft_files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69283"},"MDL-69283")," - Allow specifying a timezone when calling WebServices"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63806"},"MDL-63806")," - New Web Service mod_glossary_delete_entry"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68845"},"MDL-68845")," - Create new Web Service for retrieving the user calendar via iCal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69577"},"MDL-69577")," - Add courseId and forumId info to mod_forum_get_discussion_posts web service")),(0,l.kt)("h3",{id:"deprecations"},"Deprecations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67594"},"MDL-67594")," - Deprecate supports_recursion() & extend_lock() in the Lock API"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67735"},"MDL-67735")," - Remove Bootstrap 2 and Bootstrap 4 alpha compatibility files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69238"},"MDL-69238")," - Final removal of lib/coursecatlib.php"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63261"},"MDL-63261")," - Final deprecation of web services in message/externallib.php"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62982"},"MDL-62982")," - Remove the lib/form/htmleditor.php element"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63254"},"MDL-63254")," - Final deprecation of the events message_contact_blocked and message_contact_unblocked"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63004"},"MDL-63004"),' - Final deprecation: I navigate to "ITEM" node in "MAINNODE > PATH" behat step'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55192"},"MDL-55192")," - Final deprecation of add_to_log()"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63167"},"MDL-63167")," - Final deprecation of the gradingform_provider interface")),(0,l.kt)("h3",{id:"component-api-updates"},"Component API updates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/admin/tool/log/upgrade.txt"},"admin/tool/log/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/backup/upgrade.txt"},"backup/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/badges/upgrade.txt"},"badges/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/cache/upgrade.txt"},"cache/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/calendar/upgrade.txt"},"calendar/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/course/format/upgrade.txt"},"course/format/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/course/upgrade.txt"},"course/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/grade/grading/form/upgrade.txt"},"grade/grading/form/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/h5p/upgrade.txt"},"h5p/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/lib/upgrade.txt"},"lib/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/message/upgrade.txt"},"message/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/mod/forum/upgrade.txt"},"mod/forum/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/mod/glossary/upgrade.txt"},"mod/glossary/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/mod/lti/upgrade.txt"},"mod/lti/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/mod/quiz/upgrade.txt"},"mod/quiz/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/question/behaviour/upgrade.txt"},"question/behaviour/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/search/upgrade.txt"},"search/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/theme/upgrade.txt"},"theme/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.10.0/webservice/upgrade.txt"},"webservice/upgrade.txt"))),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.10"},"Notes de mise \xe0 jour de Moodle 3.10")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.10"},"Notas de Moodle 3.10"))))}h.isMDXComponent=!0}}]);