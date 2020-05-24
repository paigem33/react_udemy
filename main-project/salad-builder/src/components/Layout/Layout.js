import React  from 'react'

const layout = (props) => (
    <>
        <div>Navigation here</div>
        <main>
            {props.children}
        </main>
    </>
)

export default layout;