# Server Config (sv\_config.lua)

The current file is shown below exactly as it appears in Bridge.

```lua
sv_config = {
    framework = {
        ['ESX'] = {
            char_prefix = 'char', -- by default prefix for esx is char
            table_size = 60,
            identifier_columns = {
                "identifier",
                "owner",
                "owner_id",
                "citizenid", --for illenium-appearance
                -- you can add more here if you have any table with different identifier column name
            },
        },
        ['QBCore'] = {
            -- no need prefix in qbcore
            table_size = 50,
            identifier_columns = {
                "citizenid",
                -- you can add more here if you have any table with different identifier column name
            },
        },
    },
    vehicle_plate = { --  max length is 8

        -- if pattern  = "AAAA9999"  then it will generate plates like "ABCD1234"
        -- if pattern  = "9999AAAA"  then it will generate plates like "1234ABCD"
        -- if pattern  = "AA999AA"   then it will generate plates like "AB12CD"
        -- if pattern  = "AAA-9999"  then it will generate plates like "ABC-1234"
        -- if pattern  = "AAA 9999"  then it will generate plates like "ABC 1234"
        pattern = "AAA 9999", -- default pattern: 3 letters + space + 4 numbers
    },


}
```
