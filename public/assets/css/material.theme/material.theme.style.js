import { primaryColor } from "./material.theme.base";

export const gradientColor = "linear-gradient(-180deg,#7a0754,#530e59)";
import ComfortaaFont from '../../css/fonts/Comfortaa-Regular.ttf';

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
          backgroundColor: '#f8e1f1'
        }
      },
      root : {
        '&$selected': {
          backgroundColor: '#ffe0f5'
        },
        '&$selected:hover': {
          backgroundColor : '#f8e1f1'
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
    MuiTab: {},
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