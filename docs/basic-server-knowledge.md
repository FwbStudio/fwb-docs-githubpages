# Basic Server Knowledge

## Keep resource folders organized

Clear groups make start order easier to read:

```text
resources/
├── [framework]
├── [standalone]
└── [fs]
```

## Respect `server.cfg` order

Typical safe order:

1. `oxmysql`
2. framework
3. inventories / appearance / target libs
4. `ox_lib`
5. `[fs]` (Bridge + FWB scripts)

Wrong order is a common cause of “script did not detect X” issues.

## Edit configs in a real code editor

Use VS Code or similar. Avoid editors that break Lua formatting or encoding.

## Check both logs

- Client: `F8`
- Server: console / txAdmin live console
