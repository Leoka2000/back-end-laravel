import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Content = ({ keyNumber,
    id,
    image,
    name,
    country,
    funding,
    level,
    style,
    description,
    link }) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate()

    function handleSubmit() {
        navigate(`/scholarship-single`, { replace: false, state: {id}})
      }

    return (
        <div className='right-row'>
            <div className='content-header'>
                <img src={image} />
            </div>
            <div className='content-text-wrapper'>
                <h1>{name}</h1>
                <h4>Type of funding:</h4>
                <h2>{funding}</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <button {...register("submit-button")} value={`${id}`} type='button'>More info</button>
                </form>
            </div>
        </div>
    )
}

export default Content
