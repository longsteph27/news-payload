import React from 'react'
import { useDocumentInfo } from 'payload/components/utilities'
import { Link } from 'react-router-dom'

export default function AddProjectButton() {
    const { id } = useDocumentInfo()

    return (
        <div>
            <Link to={`/admin/collections/posts/create?categories=${id}`}>
                Add Post
            </Link>
        </div>
    )
}
