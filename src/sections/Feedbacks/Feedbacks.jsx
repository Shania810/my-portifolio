import React, { useEffect, useState } from 'react'
import api from '../../utils/api.utils'
import { Feedback } from '../../components/Feedback/Feedback'
import { Component } from '../../design/Component/Component'
import './style.css'

export const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        const allFeedbacks = async () => {
            try {
                const feedbacks = await api.getFeedbacks()
                setFeedbacks(feedbacks)
            } catch (error) {
                console.log(error)
            }
        }
        allFeedbacks()
    }, [])


    return (
        <section id='section-feedbacks' >
            <div>
                <div id='section-feedbacks-title' >
                    <h2>What they say about my work</h2>
                    <Component />
                </div>
                <div id='feedbacks' >
                    {feedbacks.map((feedback) => {
                        return <Feedback feedback={feedback} />
                    })}
                </div>
            </div>
        </section>
    )
}
