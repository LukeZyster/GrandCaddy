// src/pages/BrowseTasks.tsx
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

type Task = {
  id: number
  title: string
  suburb: string
  status: string
  offered_amount: number
  task_categories: { name: string }[] | null
  users: { full_name: string }[] | null
}

export default function BrowseTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTasks() {
      const { data, error } = await supabase
        .from('tasks')
        .select(`
          id,
          title,
          suburb,
          status,
          offered_amount,
          task_categories:category_id ( name ),
          users:customer_id ( full_name )
        `)
        .order('created_at', { ascending: false })

      if (error) setError(error.message)
      else setTasks((data ?? []) as unknown as Task[])
      setLoading(false)
    }
    fetchTasks()
  }, [])

  if (loading) return <p style={{ padding: 20 }}>Loading tasks…</p>
  if (error) return <p style={{ padding: 20, color: 'red' }}>Error: {error}</p>

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif', maxWidth: 700, margin: '0 auto' }}>
      <h1>GrandCaddy — Open Tasks</h1>
      <p style={{ color: '#666' }}>{tasks.length} task(s) found</p>

      {tasks.map(task => {
        const categoryName = task.task_categories?.[0]?.name ?? 'Uncategorised'
        const customerName = task.users?.[0]?.full_name ?? 'Unknown'

        return (
          <div
            key={task.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: 8,
              padding: 16,
              marginBottom: 12
            }}
          >
            <h3 style={{ margin: '0 0 8px' }}>
              {categoryName} — {task.title}
            </h3>
            <p style={{ margin: '4px 0' }}>
              <strong>Posted by:</strong> {customerName}
            </p>
            <p style={{ margin: '4px 0' }}>
              <strong>Suburb:</strong> {task.suburb}
            </p>
            <p style={{ margin: '4px 0' }}>
              <strong>Offered:</strong> R{task.offered_amount.toFixed(2)}
            </p>
            <p style={{ margin: '4px 0' }}>
              <strong>Status:</strong>{' '}
              <span style={{
                background: task.status === 'open' ? '#d4edda' : '#fff3cd',
                padding: '2px 8px',
                borderRadius: 4,
                fontSize: 13
              }}>
                {task.status}
              </span>
            </p>
          </div>
        )
      })}
    </div>
  )
}