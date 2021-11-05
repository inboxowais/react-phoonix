import { primaryColor } from "./pheonix.material.theme.base";
import ComfortaaFont from './fonts/Comfortaa-Regular.ttf';

export const gradientColor = "#0A80FE";// "linear-gradient(-180deg,#D12194,#1C0740)";

const comfortaa = {
  fontFamily: 'Comfortaa',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Comfortaa'),
    local('Comfortaa-Regular'),
    url(${ComfortaaFont}) format('truetype')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
export const themeStyles = {
    MuiPaper: {},
    MuiAppBar: {
      root : {
        background : gradientColor
      }
    },
    MuiBackdrop: {},
    MuiAvatar: {},
    MuiBadge: {},
    MuiBottomNavigation: {},
    MuiBottomNavigationAction: {},
    MuiBreadcrumbs: {},
    MuiButton: {
        root : {
            outline : 'none !important'
        }
    },
    MuiButtonBase: {},
    MuiButtonGroup: {},
    MuiCard: {},
    MuiCardActionArea: {},
    MuiCardActions: {},
    MuiCardContent: {},
    MuiCardHeader: {},
    MuiCardMedia: {},
    MuiCheckbox: {},
    MuiChip: {},
    MuiCircularProgress: {},
    MuiCollapse: {},
    MuiContainer: {},
    MuiDialog: {},
    MuiDialogActions: {},
    MuiDialogContent: {},
    MuiDialogContentText: {},
    MuiDialogTitle: {},
    MuiDivider: {},
    MuiDrawer: {},
    MuiExpansionPanel: {},
    MuiExpansionPanelActions: {},
    MuiExpansionPanelDetails: {},
    MuiExpansionPanelSummary: {},
    MuiFab: {},
    MuiFilledInput: {},
    MuiFormControl: {},
    MuiIcon: {},
    MuiFormControlLabel: {},
    MuiFormGroup: {},
    MuiFormHelperText: {},
    MuiFormLabel: {},
    MuiGrid: {},
    MuiGridList: {},
    MuiGridListTile: {},
    MuiGridListTileBar: {},
    MuiIconButton: {
        root : {
            outline : 'none !important'
        }
    },
    MuiInput: {},
    MuiInputAdornment: {},
    MuiInputBase: {},
    MuiInputLabel: {},
    MuiLinearProgress: {},
    MuiLink: {},
    MuiList: {},
    MuiListItem: {
      button: {
        '&:hover': {
        
          color : '#ffffff',
          "&& i": {
            fontSize: "20px",
            background: '#ffffff',
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }
        }
      },
      root: {
        '&$selected': {
          backgroundColor: '#BA0C2F',//    backgroundColor: '#ffe0f5' THEME_CHANGES
          color : '#ffffff',
          "&& i": {
            fontSize: "20px",
            background: '#ffffff',
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }
        },
        '&$selected:hover': {
          backgroundColor: '#BA0C2F',//     backgroundColor: '#f8e1f1' THEME_CHANGES
          color : '#ffffff',
          "&& i": {
            fontSize: "20px",
            background: '#ffffff',
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }
        }
      }
    },
    MuiListItemAvatar: {},
    MuiListItemIcon: {
      root: {
        "&& i": {
          fontSize: "20px",
          background: gradientColor,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }
      }
    },
    MuiListItemSecondaryAction: {},
    MuiListItemText: {},
    MuiListSubheader: {},
    MuiMenu: {},
    MuiMenuItem: {},
    MuiMobileStepper: {},
    MuiNativeSelect: {},
    MuiOutlinedInput: {},
    MuiPopover: {},
    MuiRadio: {},
    MuiSelect: {},
    MuiSlider: {},
    MuiSnackbar: {},
    MuiSnackbarContent: {},
    MuiStep: {},
    MuiStepButton: {},
    MuiStepConnector: {},
    MuiStepContent: {},
    MuiStepIcon: {},
    MuiStepLabel: {},
    MuiStepper: {},
    MuiSvgIcon: {},
    MuiSwitch: {},
    MuiTab: {
      root : {
        outline : 'none !important'
      }
    },
    MuiTable: {},
    MuiTableBody: {},
    MuiTableCell: {
      head: {
        color : '#ffffff'
      },
      root: {
        verticalAlign:"top"
      }
    },
    MuiTableFooter: {},
    MuiTableHead: {
      root: {
        backgroundColor: primaryColor
      }
    },
    MuiTablePagination: {},
    MuiTableRow: {},
    MuiTableSortLabel: {},
    MuiTabs: {},
    MuiTextField: {},
    MuiToolbar: {},
    MuiTooltip: {
        tooltip : {
          backgroundColor:"#ffffff",
          padding:10,
          fontSize:13,
          fontWeight:"bold",
          color:'#000000',
          fontWeight:"bold"
        },
        tooltipPlacementTop: {},
        tooltipPlacementBottom: {},
        tooltipPlacementLeft: {},
        tooltipPlacementRight: {},
    },
    MuiTouchRipple: {},
    MuiTypography: {},
    MuiCssBaseline: {
        '@global': {
          '@font-face': [comfortaa],
          '*::-webkit-scrollbar': {
            width: '0.4em'
          },
          '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
          }
        },
      }
}
