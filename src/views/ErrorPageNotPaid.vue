<template>
    <div class="">
        <h1>Error, page could not load contact administrator</h1>
        <h2>Whatsapp:</h2>
        <button @click="toggleState">Click to toggle the active state</button>
    </div>
</template>

<script lang="ts" setup>
import { UseUserPreferences } from '@/store/UseUserPreferences';


const userPreferencesStore = UseUserPreferences();
const toggleState = () => {
    userPreferencesStore.setIsPagePaid();
    alert(`Toggle state: ${userPreferencesStore.getIsPagePaid}`);
}

</script>

<style scoped>

</style>