import * as React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel  from "@material-ui/core/FormControlLabel"
import Radio  from "@material-ui/core/Radio"
import Button from "@material-ui/core/Button"


export interface ConfirmOptionDialogState {
  selectedOption: string
}

export interface DialogOptionsType {
  dialogTitle: string
  cancelText: string
  okText: string
}

export interface ConfirmOptionDialogProps extends React.Component<any, any> {
  selectedOption: string
  options: string[]
  dialogOptions?: DialogOptionsType
  open: boolean
  onOptionDialogClose: (selectedOption: string, selectedAction: string) => void
}

//"Cancel", "Ok" action type should be enum, also dialogOptions needs to be mergeable

export class ThemeChangeModal extends React.Component<any, ConfirmOptionDialogState> {
  static defaultProps = {
    dialogOptions: {
      dialogTitle: "Coglite Dialog",
      cancelText: "Cancel",
      okText: "Ok",
    },
  }

  state = {
    selectedOption: "",
  }

  constructor(props, context) {
    super(props, context)

    this.state.selectedOption = this.props.selectedOption
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedOption !== this.props.selectedOption) {
      this.setState({ selectedOption: nextProps.selectedOption })
    }
  }

  handleEntering = () => {
    //no-op;
  }

  handleCancel = () => {
    this.props.onOptionDialogClose(this.props.selectedOption, "cancel")
  }

  handleOk = () => {
    this.props.onOptionDialogClose(this.state.selectedOption, "ok")
  }

  handleChange = (event, selectedOption) => {
    this.setState({ selectedOption })
  }

  render() {
    const { selectedOption, options, dialogOptions, open, ...other } = this.props
    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        onEntering={this.handleEntering}
        aria-labelledby="confirmation-dialog-title"
        open={open}
        {...other}
      >
        <DialogTitle id="confirmation-dialog-title">{dialogOptions.dialogTitle}</DialogTitle>
        <DialogContent>
          <RadioGroup
            aria-label="ringtone"
            name="ringtone"
            value={this.state.selectedOption}
            onChange={this.handleChange}
          >
            {options.map(option => (
              <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            {dialogOptions.cancelText}
          </Button>
          <Button onClick={this.handleOk} color="primary">
            {dialogOptions.okText}
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}
