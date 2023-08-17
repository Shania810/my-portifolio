import React, { useEffect, useState } from 'react'
import api from '../../utils/api.utils'
import { Feedback } from '../../components/Feedback'

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
        <section>
            <div>
                <title>What they say about my work</title>
            </div>
            <div>
                {feedbacks.map((feedback) => {
                    return <Feedback feedback={feedback} />
                })}
            </div>
        </section>
    )
}
