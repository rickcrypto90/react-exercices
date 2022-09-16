import { useMemo } from 'react'

export function FilteredList({ people }) {

    const adults = useMemo(() => {
        return people.filter(el => el.age > 18)
    }, [people])

    return (
        <div>
            {adults.map(el => <div><h3>{el.name}</h3><p>{el.age}</p><p>{el.id}</p></div>)
            }
        </div >)
}