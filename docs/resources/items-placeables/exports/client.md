---
title: Items Placeables Client Exports | FWB Studio Docs
description: Client exports for Items Placeables.
---


# Client exports

### Client Export:

If you want to place item using your own script or in any menu then you this export

<pre class="language-lua"><code class="lang-lua">-- make sure you configured the prop under that item in config filer

--to place one item only
TriggerEvent('fs_placeables:placeitemhook', item_name)

--item_name = item spawn code should be a string

<a data-footnote-ref href="#user-content-fn-1">example:</a>
<strong>TriggerEvent('fs_placeables:placeitemhook', 'water')
</strong>
--to place specific number of count
TriggerEvent('fs_placeables:placeitemhook', item_name, item_count)

-- item_name = item spawn code must be a string
-- item_count = quantity of item must be a number

<a data-footnote-ref href="#user-content-fn-2">example:</a>
TriggerEvent('fs_placeables:placeitemhook', 'water', 1)
</code></pre>

[^1]: example of code

[^2]: example of this code
