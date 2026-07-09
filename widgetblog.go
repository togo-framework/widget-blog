// Package widgetblog is the "Latest writing" DRIVER — The latest blog posts.
//
// It self-registers into the widget base plugin on import. Install by blank-import:
//
//	import _ "github.com/togo-framework/widget-blog"
package widgetblog

import "github.com/togo-framework/widget"

func init() {
	widget.Register(widget.Descriptor{
		Key:         "blog",
		Title:       "Latest writing",
		DefaultZone: "body",
		Asset:       "/widgets/blog.js",
	})
}
