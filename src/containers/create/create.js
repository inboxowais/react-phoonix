import { Typography, Button } from '@material-ui/core'
import { IsMobileWidth } from 'components/utils/util'
import React from 'react'
import { withRouter } from 'react-router'
import { useEffect } from 'react'

function Create(props) {

    const mobileWidth = IsMobileWidth()

    const redirectTo = (route) => {
        props.history.push(route)
    }

    useEffect(() => {
        props.getAllApplets({
            "user_id": window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
            "order_by": {
                "created_at": "DESC",
                "updated_at": "ASC"
            },
        }, true)
    }, [])

    const redirect = (id) => {
        props.history.push(`/createApplet/${id}?template=true`)
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
                                <div className="pl-1 applied-font" onClick={() => redirectTo("/createApplet")}>New Applet</div>
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
                    {
                        props.applets && props.applets.templates && props.applets.templates.map((data, index) => {

                            return <div className={`${!mobileWidth && 'w-20 p-2'} ${mobileWidth && 'w-100 p-2'} cursor-pointer`} onClick={() => redirect(data.id)} >
                                <div style={{ height: 300 }}>
                                    <img src={`${data.feature_image}`} style={{ width: "100%", height: "100%" }} />
                                </div>

                            </div>

                        })

                    }

                </div>
            </div>
        </div>
    )
}

export default withRouter(Create)
