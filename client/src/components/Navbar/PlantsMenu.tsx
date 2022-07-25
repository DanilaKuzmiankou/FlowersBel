import React, {FC, MouseEventHandler, useRef} from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

interface PlantsProps {
    handleClosePlantsMenu: MouseEventHandler,
    handleOpenPlantsMenu: MouseEventHandler,
    navbarButtonsStyle: Object,
    anchorElPlants: null | HTMLElement,
    plants: string[],
    switchPage: Function,
    plantsMenuOpen: boolean
}

export const PlantsMenu:FC<PlantsProps> = ({handleClosePlantsMenu, handleOpenPlantsMenu,
                                               navbarButtonsStyle, anchorElPlants, plants, switchPage, plantsMenuOpen}) => {


    return (
        <Box display='inline-block' onMouseLeave={handleClosePlantsMenu}>
            <Button
                key='Plants'
                onMouseOver={handleOpenPlantsMenu}
                sx={navbarButtonsStyle}
            >
                Plants
                <div className="nav_dropdown-arrow w-embed">
                    <svg width="14" height="6" viewBox="0 0 14 6" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.0063 0.310204C12.348 0.0606614 12.902 0.0606614 13.2437 0.310204C13.5854 0.559746 13.5854 0.964334 13.2437 1.21388L7.61872 5.32169C7.27701 5.57123 6.72299 5.57123 6.38128 5.32169L0.756282 1.21388C0.414573 0.964334 0.414573 0.559746 0.756282 0.310204C1.09799 0.0606614 1.65201 0.0606614 1.99372 0.310204L7 3.96618L12.0063 0.310204Z"
                            fill="currentColor"></path>
                    </svg>
                </div>
            </Button>
            <Box sx={{ flexGrow: 0, pl: '10px' }}>
                <Menu
                    anchorEl={anchorElPlants}
                    disableScrollLock={true}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    MenuListProps={{ onMouseLeave: handleClosePlantsMenu }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={plantsMenuOpen}
                    onClose={handleClosePlantsMenu}
                >
                    <Box className='menu-products'>
                        <div >
                            {plants.map((plant) => (
                                <MenuItem key={plant} onClick={() => switchPage('plants', plant)}>
                                    <Typography textAlign="center">{plant}</Typography>
                                </MenuItem>
                            ))}
                        </div>
                    </Box>
                </Menu>
            </Box>
        </Box>
    );
};

