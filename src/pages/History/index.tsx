import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CyclesContext } from '../../contexts/CycleContext'
import {
  HistoryContainer,
  HistoryList,
  HistoryTable,
  HistoryTD,
  HistoryTH,
  Status,
} from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  function formattedToDate(date: Date) {
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: ptBR,
    })
  }

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <HistoryTable>
          <thead>
            <tr>
              <HistoryTH>Tarefa</HistoryTH>
              <HistoryTH>Duração</HistoryTH>
              <HistoryTH>Início</HistoryTH>
              <HistoryTH>Status</HistoryTH>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <HistoryTD>{cycle.task}</HistoryTD>
                  <HistoryTD>{cycle.minutesAmount} minutos</HistoryTD>
                  <HistoryTD>{formattedToDate(cycle.startDate)}</HistoryTD>
                  <HistoryTD>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </HistoryTD>
                </tr>
              )
            })}
          </tbody>
        </HistoryTable>
      </HistoryList>
    </HistoryContainer>
  )
}
