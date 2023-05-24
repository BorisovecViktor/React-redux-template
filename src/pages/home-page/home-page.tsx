import { useAppDispatch, useAppSelector } from '@store/hooks'
import { incremented } from 'features/counter'

export const HomePage = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <main>
      <button
        onClick={() => {
          dispatch(incremented(3))
        }}
        type="button"
      >{`Count is: ${count}`}</button>
    </main>
  )
}
