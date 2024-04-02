import React, { useMemo, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useField } from 'payload/components/forms'
import Posts from '../Posts';

export default function PrefillCategories() {


    function useQuery() {
        const { search } = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
    }

    const query = useQuery();
    const params = Object.fromEntries(query);

    const { value, setValue } = useField({ path: 'category'})

    useEffect(() => {
        !params.categories ? '':
        setValue(params.categories);
    })

    return (
        <div>
            
        </div>
    )
}
