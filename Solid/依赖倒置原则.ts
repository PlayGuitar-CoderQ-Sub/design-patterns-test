/**
 * @description 依赖倒置原则
 */
interface Database {
    insert: () => void
    update: () => void
    delete: () => void
}

type DatabaseNew = Omit<Database, 'delete'>

interface BudgetReport<T> {
    database: T
    open: (date: any) => void
    save: () => void
}

class MySQL implements BudgetReport<Database> {
    database = {
        insert: () => {},
        update: () => {},
        delete: () => {}
    }
    open = (date: any) => {}
    save = () => {}
}

class MongoDB implements BudgetReport<DatabaseNew> {
    database = {
        insert: () => {},
        update: () => {}
    }
    open = (date: any) => {}
    save = () => {}
}
