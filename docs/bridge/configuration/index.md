# Configuration Files

This section mirrors the current Bridge config files.

Only the 3 normal config files are included here.

## Main Files

| File                   | Purpose                                                      |
| ---------------------- | ------------------------------------------------------------ |
| `config/sh_config.lua` | Main shared Bridge configuration                             |
| `config/cl_config.lua` | Client-side setup for zone creation helpers                  |
| `config/sv_config.lua` | Server-side framework database settings and plate generation |

## In This Section

| Page                                                | What It Covers                            |
| --------------------------------------------------- | ----------------------------------------- |
| [Shared Config (`sh_config.lua`)](/bridge/configuration/shared-config) | Exact current `config/sh_config.lua` file |
| [Client Config (`cl_config.lua`)](/bridge/configuration/client-config) | Exact current `config/cl_config.lua` file |
| [Server Config (`sv_config.lua`)](/bridge/configuration/server-config) | Exact current `config/sv_config.lua` file |

## Notes

* most users mainly work in `sh_config.lua`
* keep supported selectors on `1` unless support tells you otherwise
* `cl_config.lua` and `sv_config.lua` should only be changed when you understand the effect
