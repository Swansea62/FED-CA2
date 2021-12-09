<template>
    <b-col>
        <b-table responsive head-varient="dark" striped hover :items="festivals" :fields="headings">
        <template #cell(title)="data">
            <p>{{ data.value }}</p>
            <router-link :to="{name:'festivals_show', params: { id: data.item._id}}">{{ data.value }}</router-link>
        </template>
        <template #cell(start_date)="data">
            <p>{{ new Date(data.value).toLocaleString() }}</p>
        </template>
        <template #cell(end_date)="data">
            <p>{{ new Date(data.value).toLocaleString() }}</p>
        </template>
    </b-table>
    </b-col>
</template>