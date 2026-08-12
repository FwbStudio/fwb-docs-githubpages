# Bridge

Bridge is the docs section for the `fs_bridge` resource.

These docs focus on the parts users and developers actually work with:

- installation order
- supported frameworks and integrations
- common setup mistakes
- unlocked override snippets
- editable config files
- public `FWB.*` namespaces and exports

## Current focus

The current public docs focus on FiveM usage with:

- `ESX`
- `QBCore`
- `Qbox`

## Sections

| Section | What it covers |
| --- | --- |
| [Supported](./supported) | Frameworks and integrations Bridge can detect |
| [Script Overrides](./script-overrides) | Manual compatibility when your resource is not listed |
| [Configuration Files](./configuration/) | Editable `sh_config`, `cl_config`, and `sv_config` |

## Quick setup notes

1. Keep Bridge with your other FWB resources under `[fs]`
2. Start framework / inventory / target before Bridge when possible
3. Prefer auto-detect (`selected_key = 1`) unless support tells you to force a resource
4. Use unlocked override files for custom compatibility — do not edit locked Bridge files

Script-specific pages will be added next as we port the rest of the catalog.
