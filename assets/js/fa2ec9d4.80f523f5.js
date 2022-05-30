"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[75858],{52184:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return d}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),s=n(13904),l=["components"],r={title:"Creating mobile course formats",tags:["Moodle App"]},c=void 0,p={unversionedId:"moodleapp/development/plugins-development-guide/examples/create-course-formats",id:"moodleapp/development/plugins-development-guide/examples/create-course-formats",title:"Creating mobile course formats",description:"Course format plugins can be supported in the app using the CoreCourseFormatDelegate.",source:"@site/docs/moodleapp/development/plugins-development-guide/examples/create-course-formats.md",sourceDirName:"moodleapp/development/plugins-development-guide/examples",slug:"/moodleapp/development/plugins-development-guide/examples/create-course-formats",permalink:"/devdocs/docs/moodleapp/development/plugins-development-guide/examples/create-course-formats",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/plugins-development-guide/examples/create-course-formats.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1653908984,formattedLastUpdatedAt:"30/05/2022",frontMatter:{title:"Creating mobile course formats",tags:["Moodle App"]},sidebar:"docs",previous:{title:"Examples",permalink:"/devdocs/docs/category/examples"},next:{title:"Accepting dynamic names in a Web Service",permalink:"/devdocs/docs/moodleapp/development/plugins-development-guide/examples/dynamic-names"}},u={},d=[{value:"Example: only display certain sections",id:"example-only-display-certain-sections",level:2}],m={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,(0,o.Z)({frontMatter:r},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"Course format plugins can be supported in the app using the CoreCourseFormatDelegate."),(0,i.kt)("p",null,"To begin, add a handler for this delegate to your course format's db/mobile.php file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="db/mobile.php"',title:'"db/mobile.php"'},"$addons = [\n    'format_myformat' => [\n        'handlers' => [ // Different places where the plugin will display content.\n            'myformat' => [ // Handler unique name (alphanumeric).\n                'delegate' => 'CoreCourseFormatDelegate', // Delegate (where to display the link to the plugin)\n                'method' => 'mobile_course_view', // Main function in \\format_myformat\\output\\mobile.\n                'styles' => [\n                    'url' => $CFG->wwwroot . '/course/format/myformat/mobile.css',\n                    'version' => 2019041000\n                ],\n                'displaysectionselector' => true, // Set to false to disable the default section selector.\n                'displayenabledownload' => true, // Set to false to hide the \"Enable download\" option in the course context menu.\n                'init' => 'myformat_init'\n            ]\n    ]\n];\n")),(0,i.kt)("p",null,"As with other plugins, you then use a function in your plugin's classes/output/mobile.php to return a template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="classes/output/mobile.php"',title:'"classes/output/mobile.php"'},"class mobile {\n\n    /**\n     * Main course page.\n     *\n     * @param array $args Standard mobile web service arguments\n     * @return array\n     */\n    public static function mobile_course_view($args) {\n        global $OUTPUT, $CFG;\n\n        $course = get_course($args['courseid']);\n        require_login($course);\n        $html = $OUTPUT->render_from_template('format_myformat/mobile_course', []);\n\n        return [\n            'templates' => [\n                [\n                    'id' => 'main',\n                    'html' => $html\n                ]\n            ],\n            'otherdata' => [\n               ...\n            ]\n        ];\n    }\n}\n")),(0,i.kt)("p",null,"Then your templates/mobile_course.mustache file will contain the angular template to display your page"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'handlebars title="templates/mobile_course.mustache"',handlebars:!0,title:'"templates/mobile_course.mustache"'},'{{=<% %>=}}\n<core-dynamic-component [component]="allSectionsComponent" [data]="data" class="format-myformat">\n    <ng-container *ngFor="let section of sections">\n        <ion-item-divider color="light">\n            <core-format-text [text]="section.name"></core-format-text>\n             \x3c!-- Section download. --\x3e\n             <div *ngIf="section && downloadEnabled" class="core-button-spinner" float-end>\n                \x3c!-- Download button. --\x3e\n                <button *ngIf="section.showDownload && !section.isDownloading && !section.isCalculating" (click)="prefetch($event, section)" ion-button icon-only clear color="dark" [attr.aria-label]="\'core.download\' | translate">\n                    <ion-icon name="cloud-download"></ion-icon>\n                </button>\n                \x3c!-- Refresh button. --\x3e\n                <button *ngIf="section.showRefresh && !section.isDownloading && !section.isCalculating" (click)="prefetch($event, section)" ion-button icon-only clear color="dark" [attr.aria-label]="\'core.refresh\' | translate">\n                    <ion-icon name="refresh"></ion-icon>\n                </button>\n                \x3c!-- Download progress. --\x3e\n                <ion-badge class="core-course-download-section-progress" *ngIf="section.isDownloading && section.total > 0 && section.count < section.total">{{section.count}} / {{section.total}}</ion-badge>\n                \x3c!-- Spinner (downloading or calculating status). --\x3e\n                <ion-spinner *ngIf="(section.isDownloading && section.total > 0) || section.isCalculating"></ion-spinner>\n            </div>\n        </ion-item-divider>\n\n        <ion-item text-wrap *ngIf="section.summary">\n            <core-format-text [text]="section.summary"></core-format-text>\n        </ion-item>\n\n        <ng-container *ngFor="let module of section.modules">\n            <ng-container *ngIf="module.visibleoncoursepage !== 0">\n                <core-course-module text-wrap [module]="module" [courseId]="course.id" [downloadEnabled]="downloadEnabled" (completionChanged)="onCompletionChange($event)">\n                </core-course-module>\n            </ng-container>\n        </ng-container>\n    </ng-container>\n</core-dynamic-component>\n')),(0,i.kt)("p",null,"You don't have to use a mustache template, you can just use a static angular template."),(0,i.kt)("p",null,"This will get you to a stage where you have something similar to the core format plugin - a list of sections with headers, each containing its list of course modules.  From here, you can make customisations to support your course format's features."),(0,i.kt)("p",null,"Note that there are a few objects available to your template without you having to do anything:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sections")," - this is an array of all the sections on the course, which includes all of the modules within that course."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"course")," - this contains the basic course data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"downloadEnabled")," - This is set using the option in the context menu, if ",(0,i.kt)("inlineCode",{parentName:"li"},"displayenabledownload")," is used in your db.php")),(0,i.kt)("h2",{id:"example-only-display-certain-sections"},"Example: only display certain sections"),(0,i.kt)("p",null,"When your course page loads, the sections array contains all of the sections on the course. However, you might not want to display all of these sections on one page.\nYou can achieve this by returning the list of sections to display along with the template in classes/output/mobile.php:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="classes/output/mobile.php"',title:'"classes/output/mobile.php"'},"class mobile {\n    public static function mobile_course_view($args) {\n       ...\n       $displaysections = myformat\\helper::get_list_of_section_ids($courseid);\n\n        return [\n            'templates' => [\n                [\n                    'id' => 'main',\n                    'html' => $html\n                ]\n            ],\n            'otherdata' => [\n               'displaysections' => json_encode($displaysections);\n            ]\n        ];\n    }\n}\n\n")),(0,i.kt)("p",null,"Then filter the list of sections in your template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'    <ng-container *ngFor="let section of sections">\n        <ng-container *ngIf="CONTENT_OTHERDATA.displaysections.hasOwnProperty(section.id.toString())">\n            \x3c!-- code to display the section goes here --\x3e\n        </ng-container>\n    </ng-container>\n')))}g.isMDXComponent=!0}}]);