# Client Config (cl\_config.lua)

The current file is shown below exactly as it appears in Bridge.

```lua
cl_config = {
    -- controls for zone creation will be used in upcoming scripts
    zonecreation = {
        poly = {
            hint = 'Add point [Left Mouse Button]  \nUndo Point [Right Mouse Button]  \nFinish [ENTER]  \nCancel [BACKSPACE]  \n Move Camera [A,W,S,D,Q,E]  \nFast [Hold Shift]  \n Slow [Hold CTRL]  \nUpper Height [SCROLL] (+/-)  \nLower Height [CTRL + Scroll]',
            controls = {
                SELECT      = { controlIndex = 18 },  -- Mouse Left
                BACK        = { controlIndex = 70 },  -- Mouse Right (undo)
                SCROLL_DOWN = { controlIndex = 180 }, -- Scroll Down
                SCROLL_UP   = { controlIndex = 181 }, -- Scroll Up
                LEFT_CTRL   = { controlIndex = 210 }, -- Left CTRL (modifier)
                ENTER       = { controlIndex = 191 }, -- Enter (finish)
                CANCEL      = { controlIndex = 202 }, -- Backspace / ESC (cancel)
                FAST        = { controlIndex = 21 },  -- Left Shift (fast)
                SLOW        = { controlIndex = 60 },  -- Left CTRL (slow)
            },
            speed = {
                default = 0.3,
                fastMultiplier = 2.0,
                slowMultiplier = 0.1,
            }
        },

        marker = {
            hint = 'Place Marker [Left Mouse Button]  \nCancel [Right Mouse Button]  \nMove [A,W,S,D,Q,E]',
            controls = {
                SELECT = { controlIndex = 18 }, -- Mouse Left
                CANCEL = { controlIndex = 70 },  -- Mouse Right (cancel)
            },
            marker = {
                zoffset = -0.7,
                size = vector3(1.0, 1.0, 1.0),
                color = { r = 0, g = 255, b = 0, a = 150 },
            }
        },

        placement = {
            single_hint = 'Place Object [Left Mouse Button]  \nCancel [BACKSPACE]  \nRotate [SCROLL BUTTONS]  \nMOVEMENT [A,W,S,D,Q,E]',
            multiple_hint = 'Place Object [Left Mouse Button]  \nUndo Last Object [Right Mouse Button]  \nFinish Placement [ENTER]  \nCancel [BACKSPACE]  \nRotate [SCROLL BUTTONS]  \nMOVEMENT [A,W,S,D,Q,E]',
            controls = {
                PLACE        = { controlIndex = 18 },  -- Mouse Left
                UNDO         = { controlIndex = 70 },  -- Mouse Right (undo last)
                CANCEL       = { controlIndex = 202 }, -- Backspace / ESC (cancel)
                ROTATE_LEFT  = { controlIndex = 180 }, -- Scroll Down
                ROTATE_RIGHT = { controlIndex = 181 }, -- Scroll Up
                FINISH       = { controlIndex = 191 }, -- Enter (finish)
            },
            speed = {
                rotate = 5.0,
                move = 0.1,
            }
        },
        place_target = {
            hint = 'Place Target [Left Mouse Button]  \nCancel [Right Mouse Button]  \nAdjust Radius [SCROLL BUTTONS]  \nMOVEMENT [A,W,S,D,Q,E]',
            controls = {
                SELECT      = { controlIndex = 18 }, -- Mouse Left
                CANCEL      = { controlIndex = 70 },  -- Backspace / ESC (cancel)
                RADIUS_UP   = { controlIndex = 181 }, -- Scroll Up
                RADIUS_DOWN = { controlIndex = 180 }, -- Scroll Down
            },
            speed = {
                radius = 0.1, -- radius incremental on each scroll
            }
        }
    },
}
```
