import { Typography, Button } from '@material-ui/core'
import { IsMobileWidth } from 'components/utils/util'
import React from 'react'
import { withRouter } from 'react-router'

function Create(props) {

    const mobileWidth = IsMobileWidth()

    const redirectTo = (route) => {
          props.history.push(route)
    }

    return (
        <div>
            <div className="d-flex flex-column">
                <div className="d-flex w-100 justify-content-between">
                    <div>
                        <Typography variant="h4">Create</Typography>
                    </div>
                    <div className="d-flex">
                        <Button>
                            <div className="d-flex">
                                <div>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <div className="pl-1" onClick  ={() => redirectTo("/createApplet")}>New Applet</div>
                            </div>
                        </Button>

                    </div>
                </div>
                <div className="pt-3">
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ultrices augue. Maecenas vestibulum feugiat sapien, commodo tempor felis faucibus pulvinar. Duis nec metus et odio pretium viverra nec non quam. Aenean mauris velit, consectetur sit amet imperdiet id.
                    </Typography>
                </div>
                <div>
                    <Typography variant="h5" className="pt-3">Phoenix NC Applet Templates</Typography>
                </div>
                <div className={`d-flex flex-wrap ${mobileWidth && 'flex-column'}`}>
                    <div className={`${!mobileWidth && 'w-20 p-2'} ${mobileWidth && 'w-100 p-2'}`} >
                        <div style={{ height: 300, backgroundColor: "gray" }}>

                        </div>

                    </div>
                    <div className={`${!mobileWidth && 'w-20 p-2'} ${mobileWidth && 'w-100 p-2'}`} >
                        <div style={{ height: 300, backgroundColor: "gray" }}>

                        </div>

                    </div>
                    <div className={`${!mobileWidth && 'w-20 p-2'} ${mobileWidth && 'w-100 p-2'}`} >
                        <div style={{ height: 300, backgroundColor: "gray" }}>

                        </div>

                    </div>
                    <div className={`${!mobileWidth && 'w-20 p-2'} ${mobileWidth && 'w-100 p-2'}`} >
                        <div style={{ height: 300, backgroundColor: "gray" }}>

                        </div>

                    </div>
                    <div className={`${!mobileWidth && 'w-20 p-2'} ${mobileWidth && 'w-100 p-2'}`} >
                        <div style={{ height: 300, backgroundColor: "gray" }}>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Create)
