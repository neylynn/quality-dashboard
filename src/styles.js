import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    navigationLogo: {
        width: "50%",
    },
    navigationLogoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigationDrawer: {
        width: 240
    },
    navigationList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    menuItemIcon: {
        width: "100%"
    },
    menuItem: {
        width: '80%',
        borderRadius: 8,
        marginBottom: 8
    },
    menuItemActive: {
        backgroundColor: "#e6e6e6"
    }
})