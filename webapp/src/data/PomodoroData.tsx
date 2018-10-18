export type PomodoroIdb = {} & {
    id: number
    userId: string
    planned: string
    actual: string
    startTime: number
    version: number
}

export const emptyPomodoro = {
    actual: "",
    id: 0,
    planned: "",
    startTime: 0,
    userId: "",
    version: 0
} 

export const createPomodoro = (userId:string, planned:string, actual:string="", startTime:number=Date.now()):PomodoroIdb => ({    
    actual,
    id: 0,
    planned,
    startTime,
    userId,
    version: 0
})


export type DatabaseWorkerCommand = {
    type: "LOAD_DATA"
  } | {
    type: "INSERT_ITEM"
    item: PomodoroIdb
  } | {
    type: "ADD",
    arg1: number,
    arg2: number
  }
  
export type DatabaseWorkerEvent = {
    type: "DATA_LOADED"
    items: any
} | {
    type: "ITEM_INSERTED"
    item: PomodoroIdb
} | {
    type: "DATABASE_ERROR"
    error: any
}
  