<template lang="pug">
  .container.plr00
    .setting-cover
      ProfileEditForm(@submitted="$emit('cancel')")
      ProfileEmailEditForm(@submitted="$emit('cancel')")
      ProfilePasswordEditForm(@submitted="$emit('cancel')")
      ProfilePhoneEditForm(@submitted="$emit('cancel')")
</template>
<script>
import ProfileEditForm from '@/components/Common/ProfileEditForm'
import ProfileEmailEditForm from '@/components/Common/ProfileEmailEditForm'
import ProfilePasswordEditForm from '@/components/Common/ProfilePasswordEditForm'
import ProfilePhoneEditForm from '@/components/Common/ProfilePhoneEditForm'
export default {
  name: 'GarageUserEdit',
  components: { ProfilePhoneEditForm, ProfilePasswordEditForm, ProfileEmailEditForm, ProfileEditForm }
}
</script>
