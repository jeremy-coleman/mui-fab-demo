import { ICheckStyleProps, ICheckStyles } from 'office-ui-fabric-react/lib/Check';
import {
  IDetailsRowStyleProps,
  IDetailsRowStyles,
  IDetailsListStyleProps,
  IDetailsListStyles
} from 'office-ui-fabric-react/lib/DetailsList';
import { IExtendedSemanticColors } from '../IExtendedSemanticColors';
import { FontSizes } from '../AzureType';
import * as StyleConstants from '../Constants';

export const CheckStyles = (props: ICheckStyleProps): Partial<ICheckStyles> => {
  const { theme, checked } = props;
  const semanticColors = theme.semanticColors as IExtendedSemanticColors;

  return {
    circle: [
      {
        color: semanticColors.listBackground,
        backgroundColor: semanticColors.listBackground,
        borderColor: semanticColors.controlOutline,
        borderWidth: StyleConstants.borderWidth,
        borderStyle: StyleConstants.borderSolid
      }
    ],
    check: [
      checked && {
        color: semanticColors.inputText
      },
      !checked && {
        color: semanticColors.listBackground
      }
    ]
  };
};

export const DetailsListStyles = (props: IDetailsListStyleProps): Partial<IDetailsListStyles> => {
  const { theme } = props;
  const { semanticColors } = theme;

  return {
    root: {
      borderTop: 'none'
    },
    headerWrapper: {
      selectors: {
        '.ms-DetailsHeader': {
          borderColor: semanticColors.variantBorder,
          textTransform: 'uppercase',
          borderTop: 'none',
          selectors: {
            '.ms-DetailsHeader-cell': {
              backgroundColor: semanticColors.listBackground,
              borderRightWidth: StyleConstants.borderWidth,
              borderRightStyle: StyleConstants.borderSolid,
              borderRightColor: semanticColors.listBackground
            },
            ':hover .ms-DetailsHeader-cell': {
              borderRightWidth: StyleConstants.borderWidth,
              borderRightStyle: StyleConstants.borderSolid,
              borderRightColor: semanticColors.variantBorder
            },
            '.ms-DetailsHeader-cellSizer': {
              marginRight: '-8px;',
              marginLeft: '-8px;'
            }
          }
        }
      }
    }
  };
};

export const DetailsRowStyles = (props: IDetailsRowStyleProps): Partial<IDetailsRowStyles> => {
  const { theme, isSelected } = props;
  const { semanticColors } = theme;

  return {
    root: [
      {
        borderColor: semanticColors.variantBorder,
        color: semanticColors.listText,
        fontSize: FontSizes.size12
      },
      !isSelected && [
        {
          background: semanticColors.listBackground,
          color: semanticColors.listText,
          selectors: {
            ':hover': {
              backgroundColor: semanticColors.listItemBackgroundHovered
            },
            ':focus': {
              backgroundColor: semanticColors.listItemBackgroundHovered
            },
            ':focus:hover': {
              backgroundColor: semanticColors.listItemBackgroundHovered
            }
          }
        }
      ],
      isSelected && [
        {
          background: semanticColors.listItemBackgroundChecked,
          selectors: {
            ':hover': {
              background: semanticColors.listItemBackgroundHovered
            },
            ':focus': {
              background: semanticColors.listItemBackgroundChecked
            },
            ':focus:hover': {
              background: semanticColors.listItemBackgroundHovered
            }
          }
        }
      ]
    ],
    cell: [
      {
        color: semanticColors.listText
      }
    ]
  };
};
