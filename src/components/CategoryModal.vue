<template>
    <TransitionRoot appear :show="true" as="template">
        <Dialog as="div" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                Add new Category
                            </DialogTitle>
                            <div class="mt-2">
                                <h1>Insert to name of category here:</h1>
                                <input type="text"
                                    class="mt-3  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="nameCategory"/>
                            </div>

                            <div class="mt-4 flex items-center justify-center">
                                <button type="button"
                                    @click="addNewCategory"
                                    class="rounded-md mr-4 border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                    Add
                                </button>
                                <button @click="closedModal">
                                    Close
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>


<script>

import { Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from "@headlessui/vue"
import { ref } from "vue"

const isOpen = ref(true)

export default {
    name: "CategoryModal",
    components: {
        TransitionRoot,
        Dialog,
        DialogPanel,
        DialogTitle,
        TransitionChild,

    }, 
    data(){
        return{
            closeModal: isOpen.value,
            nameCategory: '',
            req: this.$globalToken
        }
    },
    methods: {
        addNewCategory() {
            this.axios.post("https://localhost:7083/api/category", {
                name: this.nameCategory
            }, this.req).then(res => {
                console.log(res);
                window.location.reload()
            }).catch(err => {
                console.log(err);
            })
        },
        closedModal(){
            window.location.reload()
        }
    }
}
</script>

<style scoped></style>