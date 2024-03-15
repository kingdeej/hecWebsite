import React from 'react'

export default function Loading(type) {
    return(
        <div datatype-loading={!type.type ? 'normal' : type.type} className='loading | position-center'></div>
    )
}
